const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

export default class ApiService {
    #endPoint = null;
    #authorization = null;

    constructor(endPoint, authorization) {
      this.#endPoint = endPoint;
      this.#authorization = authorization;
    }

    get points() {
      return this.#load({url: 'points'})
        .then(ApiService.parseResponse);
    }

    updateTask = async (point) => {
      const response = await this.#load({
        url: `points/${point.id}`,
        method: Method.PUT,
        body: JSON.stringify(point),
        headers: new Headers({'Content-Type': 'application/json'}),
      });

      const parsedResponse = await ApiService.parseResponse(response);

      return parsedResponse;
    }

    #load = async ({
      url,
      method = Method.GET,
      body = null,
      headers = new Headers(),
    }) => {
      headers.append('Authorization', this.#authorization);

      const response = await fetch(
        `${this.#endPoint}/${url}`,
        {method, body, headers},
      );

      try {
        ApiService.checkStatus(response);
        return response;
      } catch (err) {
        ApiService.catchError(err);
      }
    }

    static parseResponse = (response) => response.json();

    static checkStatus = (response) => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
    }

    static catchError = (err) => {
      throw err;
    }

    adaptToServer = (point) => {
      const adaptedPoints = {...point,
        'date_from': point.date_from instanceof Date ? point.date_from.toISOString() : null, // На сервере дата хранится в ISO формате
        'date_to': point.date_to instanceof Date ? point.date_to.toISOString() : null,
        'type': point.type  ? point.type.toLowerCase() : null,
      };

      return adaptedPoints;
    }

    addPoint = async (point) => {
      const response = await this.#load({
        url: 'Points',
        method: Method.POST,
        body: JSON.stringify(this.adaptToServer(point)),
        headers: new Headers({'Content-Type': 'application/json'}),
      });

      const parsedResponse = await ApiService.parseResponse(response);

      return parsedResponse;
    }

    deleteTask = async (point) => {
      const response = await this.#load({
        url: `Points/${point.id}`,
        method: Method.DELETE,
      });

      return response;
    }
}
