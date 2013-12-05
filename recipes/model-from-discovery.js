/**
 * This example demonstrates how to discover data models from relational DBs.
 */
var ds = require('../data-sources/db.js')('oracle');

/**
 * Discover and build models from INVENTORY table
 */
ds.discoverAndBuildModels('INVENTORY', {visited: {}, owner: 'LOOPBACK', associations: true}, function (err, models) {

    console.log(ds.name, ds.connector.name);
    console.log(models.Inventory.settings);
    console.log(models.Inventory.definition.properties);
    models.Inventory.findOne({}, function (err, inv) {
        if (err) {
            console.error(err);
            return;
        }
        console.log("\nInventory: ", inv);
        inv.product(function (err, prod) {
            console.log(err);
            console.log("\nProduct: ", prod);
            console.log("\n ------------- ");
        });
    });
});
