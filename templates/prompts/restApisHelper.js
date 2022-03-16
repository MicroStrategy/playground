class RestApisHelper {
  // Checks to see if there is an existing authToken otherwise return null
  static getAuthToken(serverUrl) {
    const options = {
      method: 'GET',
      // Including cookie
      credentials: 'include',
      // Setting as cors mode for cross origin
      mode: 'cors',
      headers: { 'content-type': 'application/json' },
    };
    return fetch(`${serverUrl}/api/auth/token`, options)
      .then((response) => {
        if (response.ok) return response.headers.get('x-mstr-authtoken');
        response.json().then((json) => console.error(json));
        return null;
      })
      .catch((error) => error);
  }

  // Log user in as guest. And return authToken if successful.
  static guestLogin(serverUrl) {
    // Make a call to REST API to log the user in
    const options = {
      method: 'POST',
      credentials: 'include', // Including cookie
      mode: 'cors', // Setting as cors mode for cross origin
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        loginMode: 8, // 8 means guest login
      }),
    };
    return fetch(`${serverUrl}/api/auth/login`, options)
      .then((response) => {
        if (response.ok) {
          return response.headers.get('x-mstr-authtoken');
        }
        response.json().then((json) => console.error(json));
        return null;
      })
      .catch((error) => error);
  }

  // Create the dossier instance to embed. Returns an instance.
  static createInstance(authToken, serverUrl, projectId, dossierId) {
    const options = {
      method: 'POST',
      credentials: 'include', // Including cookie
      mode: 'cors', // Setting as cors mode for cross origin
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        'x-mstr-authtoken': authToken,
        'x-mstr-projectid': projectId,
      },
    };
    return fetch(`${serverUrl}/api/dossiers/${dossierId}/instances`, options)
      .then((response) => response.json())
      .catch((error) => error);
  }

  // Reprompts the dossier. Sets the status to open to be able to answer the prompts. Returns an instance.
  static repromptDossier(authToken, serverUrl, projectId, dossierId, instanceId) {
    const options = {
      method: 'POST',
      credentials: 'include', // Including cookie
      mode: 'cors', // Setting as cors mode for cross origin
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        'x-mstr-authtoken': authToken,
        'x-mstr-projectid': projectId,
      },
    };
    return fetch(
      `${serverUrl}/api/documents/${dossierId}/instances/${instanceId}/rePrompt`,
      options,
    )
      .then((response) => response.json())
      .catch((error) => error);
  }

  // Get the available prompts in the dossier and return as an array of promptObj objects
  static getPrompts(authToken, serverUrl, projectId, dossierId, instanceId) {
    const options = {
      method: 'GET',
      credentials: 'include', // Including cookie
      mode: 'cors', // Setting as cors mode for cross origin
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        'x-mstr-authtoken': authToken,
        'x-mstr-projectid': projectId,
      },
    };
    return fetch(`${serverUrl}/api/documents/${dossierId}/prompts`, options)
      .then((response) => response.json())
      .catch((error) => error);
  }

  // Function to retrieve the available elements of prompt. promptIdentifier can the prompt key or id.
  static getPromptElements(
    authToken,
    serverUrl,
    projectId,
    dossierId,
    instanceId,
    promptIdentifier,
  ) {
    const options = {
      method: 'GET',
      // Including cookie
      credentials: 'include',
      // Setting as cors mode for cross origin
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        'x-mstr-authtoken': authToken,
        'x-mstr-projectid': projectId,
      },
    };
    return fetch(
      `${serverUrl}/api/documents/${dossierId}/instances/${instanceId}/prompts/${promptIdentifier}/elements/`,
      options,
    )
      .then((response) => response.json())
      .catch((error) => error);
  }

  // Function to retrieve the available objects of prompt. promptIdentifier can the prompt key or id.
  static getPromptObjects(
    authToken,
    serverUrl,
    projectId,
    dossierId,
    instanceId,
    promptIdentifier,
  ) {
    const options = {
      method: 'GET',
      // Including cookie
      credentials: 'include',
      // Setting as cors mode for cross origin
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        'x-mstr-authtoken': authToken,
        'x-mstr-projectid': projectId,
      },
    };
    return fetch(
      `${serverUrl}/api/documents/${dossierId}/instances/${instanceId}/prompts/${promptIdentifier}/objects/`,
      options,
    )
      .then((response) => response.json())
      .catch((error) => error);
  }

  // Function to answer prompts using REST API. Answer the prompt in a different instance and show it.
  static answerPrompts(authToken, serverUrl, projectId, dossierId, instanceId, promptsList) {
    // Reprompt the dossier if answering prompt isn't enabled.
    const requestBody = JSON.stringify({ prompts: promptsList });
    const options = {
      method: 'PUT',
      // Including cookie
      credentials: 'include',
      // Setting as cors mode for cross origin
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        'x-mstr-authtoken': authToken,
        'x-mstr-projectid': projectId,
      },
      body: requestBody,
    };
    return fetch(
      `${serverUrl}/api/documents/${dossierId}/instances/${instanceId}/prompts/answers`,
      options,
    )
      .then((response) => response)
      .catch((error) => error);
  }
}
