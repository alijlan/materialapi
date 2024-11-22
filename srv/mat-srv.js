const cds = require('@sap/cds');

module.exports = cds.service.impl( async function() {
    const MatSrv = await cds.connect.to("API_MATERIAL_STOCK_SRV");
    this.on("READ", "Materials", async(req) => {
        /* req.query.where("SerialNumber <> '' and Material <> '' "); */
        return await MatSrv.transaction(req).send({
            query: req.query,
            headers: {
                apikey: process.env.apikey
            }
        });
    }) ;
})