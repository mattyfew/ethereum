'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new');
routes.add('/campaigns/:address', '/campaigns/show');
routes.add('/campaigns/:address/requests', '/campaigns/requests/index');
routes.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGtCQUE2QixBQUE3QjtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgsdUJBQWtDLEFBQWxDO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxnQ0FBMkMsQUFBM0M7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLG9DQUErQyxBQUEvQzs7QUFFQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0ZmV3ZXIvZGV2L2V0aGVyZXVtL2tpY2tzdGFydCJ9