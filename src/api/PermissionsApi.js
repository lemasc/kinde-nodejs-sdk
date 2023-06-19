/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreatePermissionRequest from '../model/CreatePermissionRequest';
import ErrorResponse from '../model/ErrorResponse';
import SuccessResponse from '../model/SuccessResponse';

/**
* Permissions service.
* @module api/PermissionsApi
* @version 1
*/
export default class PermissionsApi {

    /**
    * Constructs a new PermissionsApi. 
    * @alias module:api/PermissionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createPermission operation.
     * @callback module:api/PermissionsApi~createPermissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new permission
     * Create permission.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePermissionRequest} opts.createPermissionRequest Permission details.
     * @param {module:api/PermissionsApi~createPermissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    createPermission(opts, callback) {
      opts = opts || {};
      let postBody = opts['createPermissionRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['kindeBearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = SuccessResponse;
      return this.apiClient.callApi(
        '/api/v1/permissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPermissions operation.
     * @callback module:api/PermissionsApi~getPermissionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Permissions
     * The returned list can be sorted by permission name or permission ID in ascending or descending order. The number of records to return at a time can also be controlled using the `page_size` query string parameter. 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Field and order to sort the result by.
     * @param {Number} opts.pageSize Number of results per page. Defaults to 10 if parameter not sent.
     * @param {String} opts.nextToken A string to get the next page of results if there are more results.
     * @param {module:api/PermissionsApi~getPermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    getPermissions(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sort': opts['sort'],
        'page_size': opts['pageSize'],
        'next_token': opts['nextToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['kindeBearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = SuccessResponse;
      return this.apiClient.callApi(
        '/api/v1/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePermissions operation.
     * @callback module:api/PermissionsApi~updatePermissionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a permission
     * Update permission
     * @param {Number} permissionId The identifier for the permission.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreatePermissionRequest} opts.createPermissionRequest Permission details.
     * @param {module:api/PermissionsApi~updatePermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    updatePermissions(permissionId, opts, callback) {
      opts = opts || {};
      let postBody = opts['createPermissionRequest'];
      // verify the required parameter 'permissionId' is set
      if (permissionId === undefined || permissionId === null) {
        throw new Error("Missing the required parameter 'permissionId' when calling updatePermissions");
      }

      let pathParams = {
        'permission_id': permissionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['kindeBearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = SuccessResponse;
      return this.apiClient.callApi(
        '/api/v1/permissions/{permission_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}