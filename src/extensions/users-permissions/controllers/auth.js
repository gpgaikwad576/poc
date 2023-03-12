module.exports = (plugin) => {
  plugin.controllers.controllerA.login= (ctx) => {};

  plugin.policies[newPolicy] = (ctx) => {};

  plugin.routes['content-api'].routes.push({
    method: 'GET',
    path: '/route-path',
    handler: 'controller.action',
  });

  return plugin;
};
