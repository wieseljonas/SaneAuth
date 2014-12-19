export function initialize(container, application) {
  application.inject('route', 'adminService', 'service:admin');
}

export default {
  name: 'admin-service',
  initialize: initialize
};
