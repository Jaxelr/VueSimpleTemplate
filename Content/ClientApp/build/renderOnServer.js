process.env.VUE_ENV = 'server';

const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../../wwwroot/dist/server.js')
const code = fs.readFileSync(filePath, 'utf8')

const vue_renderer = require('vue-server-renderer').createBundleRenderer(code)

//prevent XSS attack when initialize state
var serialize = require('serialize-javascript')
var prerendering = require('aspnet-prerendering')
module.exports = prerendering.createServerRenderer(function (params) {
    return new Promise(
        function (resolve, reject) {
            const context = {
                url: params.url,
                absoluteUrl: params.absoluteUrl,
                baseUrl: params.baseUrl,
                data: params.data,
                domainTasks: params.domainTasks,
                location: params.location,
                origin: params.origin,
                xss: serialize("</script><script>alert('Possible XSS vulnerability from user input!')</script>")
            }
            vue_renderer.renderToString(context, (err, _html) => {
                if (err) { reject(err.message) }
                resolve({

                    html: _html,
                    globals: {
                        __INITIAL_STATE__: context.state
                    }
                })
            })
        })
});
