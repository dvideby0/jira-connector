"use strict";

module.exports = SprintClient;

/**
 * Used to access Jira REST endpoints in '/rest/api/2/sprint'
 * @param {JiraClient} jiraClient
 * @constructor ProjectClient
 */
function SprintClient(jiraClient) {
  this.jiraClient = jiraClient;

  /**
   * Returns all projects which are visible for the currently logged in user. If no user is logged in, it returns the
   * list of projects that are visible when using anonymous access.
   *
   * @method getAllProjects
   * @memberOf ProjectClient#
   * @param opts Ignored
   * @param callback Called when the projects have been retrieved.
   */
  this.getAllSprints = function (opts, callback) {
    var options = {
      uri: this.jiraClient.buildIntegrationURL('/greenhopper/1.0/sprintquery/' + opts.rapidId + '?includeFutureSprints=true'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };
    this.jiraClient.makeRequest(options, callback);
  };

  this.getSprint = function (opts, callback) {
    var options = {
      uri: this.jiraClient.buildIntegrationURL('/greenhopper/1.0/rapid/charts/sprintreport?rapidViewId=' + opts.rapidViewId + '&sprintId=' + opts.sprintId),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };
    this.jiraClient.makeRequest(options, callback);
  };

  this.getRapidViews = function (opts, callback) {
    var options = {
      uri: this.jiraClient.buildIntegrationURL('/greenhopper/1.0/rapidview'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };
    this.jiraClient.makeRequest(options, callback);
  };
}
