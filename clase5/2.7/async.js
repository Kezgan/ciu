async function getProcessedData(url) {
    try {
        return downloadData(url)
    } catch(e) {
        return downloadFallbackData(url)
    }
    try {
        return processDataInWorker(v)
    } catch(e) {
        return null
    }
}

