<script>
    import {
        Alert,
        Breadcrumb,
        BreadcrumbItem,
        Button,
        ButtonGroup,
        Dropzone,
        Input,
        InputAddon,
        Modal,
        Popover,
        RadioButton
    } from "flowbite-svelte";
    import TranslateInput from "$lib/TranslateInput.js";
    import LanguageDropdown from "$lib/LanguageDropdown.svelte";
    import {_getAssetAsText, _postRows} from "./http.js";
    import Prism from "svelte-prism";
    import jsonSimpleExample from '$lib/assets/code/simple-example.json.txt';
    import xmlSimpleExample from '$lib/assets/code/simple-example.xml.txt';
    import csvSimpleExample from '$lib/assets/code/simple-example.csv.txt';
    import {onMount} from "svelte";
    import {
        getCsvFromData,
        getCsvFromTranslated,
        getDataFromCsv,
        getDataFromJson,
        getDataFromXML,
        getJsonFromData,
        getJsonFromTranslated,
        getXmlFromData,
        getXmlFromTranslated
    } from "./file.js";
    import {getSourceLanguageFromCode, getTargetLanguageFromCode} from "$lib/langCodeMap.js";

    let selectedLanguageCodeFrom = '';
    let selectedLanguageCodeTo = '';

    let translateInputs = [];
    let translatePurpose = '';

    let defaultModal = false;
    let isAlertVisible = false;
    let alertContent = '';

    for (let i = 0; i < 10; i++) {
        translateInputs.push(new TranslateInput(''));
    }

    /**
     *
     * @param {TranslateInput[]} translateInputs
     * @return {boolean}
     */
    function checkInputLengthValidity(translateInputs) {
        for (let translateInput of translateInputs) {
            if (translateInput.value && translateInput.value.length > 0) {
                return true;
            }
        }
        return false;
    }


    /**
     *
     * @param {TranslateInput[]} translateInputs
     */
    function convertTranslateInputsToTranslate(translateInputs) {
        let result = [];
        for (let translateInput of translateInputs) {
            result.push(translateInput.value);
        }
        return result;
    }

    /**
     *
     * @param {TranslateInput[]} translateInputs
     */
    async function onClickTranslate(translateInputs) {
        if (checkInputLengthValidity(translateInputs)) {
            isAlertVisible = false;
            defaultModal = true;

            /** @type {{input_lang_code: string, translated: string[]} | undefined} */
            const data = await _postRows(
                translatePurpose,
                selectedLanguageCodeFrom,
                '',
                selectedLanguageCodeTo,
                '',
                convertTranslateInputsToTranslate(translateInputs));

            if (!data) {
                return;
            }

            let result;
            let ext;
            let type;

            if (downloadTypes === 'json') {
                result = getJsonFromTranslated(data);
                ext = "json";
                type = "application/json";
            } else if (downloadTypes === 'xml') {
                result = getXmlFromTranslated(data);
                ext = "xml";
                type = "application/xml";
            } else if (downloadTypes === 'csv') {
                result = getCsvFromTranslated(data);
                ext = "csv";
                type = "text/csv";
            }

            if (result) {
                const file = new Blob([JSON.stringify(data)], {type: type})
                const link = document.createElement('a');
                link.href = URL.createObjectURL(file);
                link.download = `translated.${selectedLanguageCodeTo}.${ext}`;
                link.click();
                URL.revokeObjectURL(link.href);
            }
        } else {
            isAlertVisible = true;
            alertContent = 'Nothing to translate!';
        }
    }

    /**
     *
     * @param {string} translatePurpose
     * @param {TranslateInput[]} translateInputs
     */
    function onClickDownloadInput(translatePurpose, translateInputs) {
        const list = translateInputs.map(d => d.value || '');
        let result;
        let ext;
        let type;
        if (downloadTypes === 'json') {
            result = getJsonFromData(translatePurpose, list);
            ext = "json";
            type = "application/json";
        } else if (downloadTypes === 'xml') {
            result = getXmlFromData(translatePurpose, list);
            ext = "xml";
            type = "application/xml";
        } else if (downloadTypes === 'csv') {
            result = getCsvFromData(list);
            ext = "csv";
            type = "text/csv";
        }
        if (result) {
            const file = new Blob([result], {type: type});
            const link = document.createElement('a');
            link.href = URL.createObjectURL(file);
            if (selectedLanguageCodeTo) {
                link.download = `input.${selectedLanguageCodeTo}.${ext}`;
            } else {
                link.download = `input.${ext}`;
            }
            link.click();
            URL.revokeObjectURL(link.href);
        }
    }

    // const onDrop = files => alert(`Files: ${files.map(d => d.name).join(', ')}`)

    /** @type {{name: string, file: File}[]} */
    let value = [];

    const allowedExtensions = new Set(['.csv', '.xml', '.json']);
    /**
     *
     * @param {string} fileName
     */
    const findExtension = (fileName) => {
        let index = fileName.trim().lastIndexOf('.');
        if (index > -1) {
            return fileName.slice(index)
        } else {
            return null;
        }
    }

    /**
     *
     * @param {{file: File, name: string}[]} fileList
     */
    const filterFile = (fileList) => {
        let result = [];
        for (let file of fileList) {
            /** @type {string | null} */
            const ext = findExtension(file.name);
            if (ext && allowedExtensions.has(ext.toLowerCase())) {
                result.push(file);
            }
        }
        return result;
    }

    const retrieveFilesFromEvent = (event) => {
        event.preventDefault();
        /** @type {{name: string, file: string}[]} */
        let result = [];

        /**
         *
         * @param items
         */
        const retrieveFileNameList = (items) => {
            let result = [];
            for (let item of [...items]) {
                let file
                if (item.kind === 'file') {
                    file = item.getAsFile();
                } else {
                    file = item;
                }
                result.push({
                    file: file,
                    name: file.name
                });
            }
            return result;
        }
        if (event.dataTransfer) {
            if (event.dataTransfer.items) {
                result = retrieveFileNameList([...event.dataTransfer.items]);
            } else if (event.dataTransfer.files) {
                result = retrieveFileNameList([...event.dataTransfer.files]);
            }
        } else if (event.target && event.target.files) {
            result = retrieveFileNameList([...event.target.files]);
        }
        if (result.length === 1) {
            result = filterFile(result);
            if (result.length === 1) {
                return result
            }
        }
        return [];
    }

    const dropHandle = (event) => {
        event.preventDefault();
        dragEnter = false;
        value = retrieveFilesFromEvent(event);
    };

    const dragOverHandle = (event) => {
        event.preventDefault();
        dragEnter = true;
    }

    const handleChange = (event) => {
        dragEnter = false;
        value = retrieveFilesFromEvent(event);
    };

    /**
     *
     * @param {string} purpose
     * @param {string[]} list
     */
    const onLoadDataFromFile = (purpose, list) => {
        translatePurpose = purpose;
        translateInputs = [];
        for (let i = 0; i < list.length && translateInputs.length < 200; i++) {
            if (translateInputs.length <= i) {
                for (let j = 0; j < 10; j++) {
                    translateInputs.push('');
                }
            }
            translateInputs[i] = {value: list[i]};
        }
        translateInputs = translateInputs;
    }

    /**
     *
     * @param {{file: File, name: string}[]} fileList
     */
    const showFiles = (fileList) => {
        if (fileList.length === 1) {
            let fileName = fileList[0].name;
            if (fileName.endsWith('.json')) {
                getDataFromJson(fileList[0].file, onLoadDataFromFile);
            } else if (fileName.endsWith('.xml')) {
                getDataFromXML(fileList[0].file, onLoadDataFromFile)
            } else if (fileName.endsWith('.csv')) {
                getDataFromCsv(fileList[0].file, onLoadDataFromFile)
            }
            return fileList[0].name;
        } else {
            return [];
        }
    };

    let downloadTypes = "csv";
    let dragEnter = false;

    let exampleDataMap = new Map();
    onMount(async () => {
        let json = await _getAssetAsText(jsonSimpleExample);
        if (json) {
            exampleDataMap.set('json', json);
        } else {
            console.log(`Failed Loading json: ${json}`)
        }

        let xml = await _getAssetAsText(xmlSimpleExample);
        if (xml) {
            exampleDataMap.set('xml', xml);
        } else {
            console.log(`Failed loading xml: ${xml}`)
        }

        let csv = await _getAssetAsText(csvSimpleExample);
        if (csv) {
            exampleDataMap.set('csv', csv);
        } else {
            console.log(`Failed loading xml: ${csv}`)
        }
    });
</script>

<div class="flex flex-col">
    <div class="flex flex-row p-4">
        <Breadcrumb aria-label="Solid background breadcrumb example" solid>
            <BreadcrumbItem href="/app/translate">Translate</BreadcrumbItem>
        </Breadcrumb>
    </div>
    <div class="grid grid-cols-5 px-4 gap-1">
        <ButtonGroup class="col-span-3 w-full h-10">
            <InputAddon>
                <div class="w-20">
                    Languages
                </div>
            </InputAddon>
            <Input floatClass="w-[12rem]" value={getSourceLanguageFromCode(selectedLanguageCodeFrom)}/>
            <LanguageDropdown withAutomatic={true} bind:selectedLanguage={selectedLanguageCodeFrom}/>
            <InputAddon>
                <div class="w-5 text-center">
                    >
                </div>
            </InputAddon>
            <Input floatClass="w-[12rem]" value={getTargetLanguageFromCode(selectedLanguageCodeTo)}/>
            <LanguageDropdown bind:selectedLanguage={selectedLanguageCodeTo}/>
            <Button on:click={() => defaultModal = true}>Translate
            </Button>
            <Modal title="Privacy Policy" bind:open={defaultModal} autoclose>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <!-- 대략 서버에 관련 내용이 저장되지 않는다는 고지-->
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May
                    25 and is meant to ensure a common set of data rights in the European Union. It requires
                    organizations to notify users as soon as possible of high-risk data breaches that could
                    personally affect them.
                </p>
                <svelte:fragment slot="footer">
                    <Button on:click={() => onClickTranslate(translateInputs)}>I accept</Button>
                    <Button color="alternative">Decline</Button>
                </svelte:fragment>
            </Modal>
        </ButtonGroup>

        <ButtonGroup class="grid grid-cols-3 w-full">
            <RadioButton value={"json"} bind:group={downloadTypes}>JSON</RadioButton>
            <RadioButton value={"xml"} bind:group={downloadTypes}>XML</RadioButton>
            <RadioButton value={"csv"} bind:group={downloadTypes}>CSV</RadioButton>
        </ButtonGroup>

        <Dropzone
                on:drop={dropHandle}
                on:dragover={dragOverHandle}
                on:dragleave={(event) => {
                    event.preventDefault();
                    dragEnter = false;
                }}
                on:change={handleChange}
                class="relative row-span-2 h-full">
            {#if dragEnter}
                Finally... Some Files are over here...
            {:else if value.length === 0}
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                        class="font-semibold">Click to upload</span></p>
                <p class="text-xs text-gray-500 dark:text-gray-400">or drag and drop</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">(JSON, XML or CSV)</p>
            {:else}
                <p class="text-xs text-gray-500 dark:text-gray-400">Uploading...</p>
                <p class="text-xs text-gray-500 dark:text-gray-400"><span
                        class="font-semibold">{showFiles(value)}</span></p>
            {/if}
            <a id="b3"
               class="absolute w-7 h-7 right-[-0.2rem] top-[-1rem] dark:bg-gray-400 text-center rounded-2xl border-2"
               href="/app/guide#file_format">
                ?
            </a>
        </Dropzone>
        <Popover triggeredBy="#b3"
                 class="w-[45rem] text-sm font-light text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                 placement="bottom-start"
                 title="Format Guide">
            <div class="p-3 space-y-2 text-left">
                <div class="border-2 p-1 rounded-lg">
                    <h3 class="font-semibold text-gray-900 dark:bg-gray-500 dark:text-white text-left px-2 rounded">
                        JSON</h3>
                    <Prism language="js" source={exampleDataMap.get('json')}/>
                </div>

                <div class="border-2 p-1 rounded-lg">
                    <h3 class="font-semibold text-gray-900 dark:bg-gray-500 dark:text-white text-left px-2 rounded">
                        XML</h3>
                    <Prism language="xml" source={exampleDataMap.get('xml')}/>
                </div>

                <div class="border-2 p-1 rounded-lg">
                    <h3 class="font-semibold text-gray-900 dark:bg-gray-500 dark:text-white text-left px-2 rounded">
                        CSV</h3>
                    <Prism language="txt" source={exampleDataMap.get('csv')}/>
                </div>

                <a href="/app/guide#file_format"
                   class="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700">
                    Read more >
                </a>
            </div>
        </Popover>

        <ButtonGroup class="col-span-3 w-full h-10">
            <InputAddon>
                <div class="w-20">
                    Purpose
                </div>
            </InputAddon>
            <Input bind:value={translatePurpose}/>
        </ButtonGroup>

        <Button class="w-full" on:click={(e) => onClickDownloadInput(translatePurpose, translateInputs)}>Download
            Input
        </Button>


    </div>
    <div class="h-14 pt-1.5">
        {#if isAlertVisible}
            <div class="px-4">
                <Alert color="red" dismissable on:close={(e) => isAlertVisible = false}>
                    <span class="font-medium">Translation Error!</span>
                    {alertContent}
                </Alert>
            </div>
        {/if}
    </div>
    <div class="flex flex-col px-4 py-2 gap-1">
        {#each translateInputs as ti, i}
            <ButtonGroup>
                <InputAddon>
                    <div class="w-10 text-right">
                        {i + 1}
                    </div>
                </InputAddon>
                <Input bind:value={ti.value} color={ti.value && ti.value.length > 2048 ? 'red' : 'base'}/>
            </ButtonGroup>
        {/each}
        <div class="flex flex-row justify-center py-4">
            {#if translateInputs.length < 200}
                <Button on:click={(e) => {
                    for(let i = 0; i < 10; i++) {
                        translateInputs.push(new TranslateInput());
                        translateInputs = translateInputs;
                    }
                }}>
                    Add 10 Rows
                </Button>
            {:else}
                <Button color="alternative">Max 200 Rows Reached</Button>
            {/if}
        </div>
    </div>
</div>