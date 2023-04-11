# Endpoints

The REST API provides the following endpoints:

## POST /register
This endpoint allows users to register a new account.

### Request Body

- username (string, required): The username for the new user.
- email (string): The email address for the new user.
- password (string, required): The password for the new user.

### Response

201 Created: If the user account is created successfully.
```json
{
  "message": "User created successfully"
}
```

409 Conflict: If the provided username is already taken.
```json
{
  "message": "This username is already taken"
}
```

500 Internal Server Error: If there is an error creating the user account.
```json
{
  "message": "Failed to create user"
}
```


## POST /login
This endpoint allows users to authenticate and log in to their account.

### Request Body

- username (string, required): The username of the user.
- password (string, required): The password of the user.

### Response

200 OK: If the user is authenticated successfully.
```js
"Successfully authenticated"
```

401 Unauthorized: If the provided username or password is invalid.
```json
{
  "message": "Invalid username" // or "Invalid password"
}
```


## GET /user
This endpoint returns the details of the currently logged-in user.

### Response

200 OK: If the user is logged in.
```json
// User object
{
  "username": "user1",
  "email": "user1@example.com",
  // ... other user properties
}
```

401 Unauthorized: If the user is not logged in.
```json
{
  "message": "User not found"
}
```


## GET /logout
This endpoint allows users to log out of their account.

### Response

200 OK: If the user is logged out successfully.

```js
"success"
```

## POST /createposts
This endpoint allows users to create a new post.

Example: "https::/www.server.com/createposts"

### Request Body

- author (string, required): The author of the post.
- title (string, required): The title of the post.
- content (string)
- tags (array of string, required)


## GET /posts/?
T.B.D

Examples:

### Response:
T.B.D

## DELETE /posts/:postId
This endpoint is used to delete a post by its postId.

Examples:
- `https::/www.server.com/posts/${posts[0].uid}`
- `https::/www.server.com/posts/:${posts[1].uid}`


### Response:

- 204 No Content: If the post is deleted successfully.
- 500 Internal Server Error: If there is an error deleting the post.