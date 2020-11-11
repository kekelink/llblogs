module.exports=  function resolveMatchingConfig (route, config) {
    if (Array.isArray(config)) {
        return {
            base: '/',
            config: config
        }
    }
    for (const base in config) {
        const encodeBase = encodeURI(base)
        if (ensureEndingSlash(route.path).indexOf(encodeBase) === 0) {
            return {
                base,
                config: config[base]
            }
        }
    }
    return {}
}