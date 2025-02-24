# Spotify Album Ratings App

This project was created using Vite. Follow the steps below to set up and run the application.

## Steps to Get Started

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <repository_url>
```

### 2. Navigate to the Client Folder

Go to the `clients` folder within the project:

```bash
cd Client
```

### 3. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 4. Create an Environment Variable File

Before running the app, you need to create an environment variable to authenticate with the Spotify API.

- Create a `.env` file in the `clients` directory.
- Add the following line to the file:

```env
VITE_SPOTIFY_CLIENT_ID=<your_spotify_client_id>
```

### 5. Get Your Spotify API Key

To get your `VITE_SPOTIFY_CLIENT_ID`, you need to create an API key from the Spotify Developer Dashboard.

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
2. Log in with your Spotify account (make sure you're using the account you've registered for development purposes).
3. Click "Create an App" and fill out the required information.
4. Once your app is created, you'll be given a **Client ID**. Copy it and paste it into your `.env` file.

### 6. Log in to Spotify

To use the Spotify API, you need to log in with the account that you used to create the API key. Other Spotify accounts are not supported for this application as the API is in developer mode and requires registered accounts.

### 7. Run the Application

Now that you have set up the environment, you can start the application by running the following command:

```bash
npm run dev
```

This will start the development server, and you can access the app by going to [http://localhost:5173/](http://localhost:5173/) in your browser.

### 8. App Functionality

This app uses the Spotify API to fetch the latest album releases. You can rate each album and track whether you've already listened to the songs. All ratings are stored in the browser's `localStorage` along with the album's details.

The Spotify API will provide album data, while your ratings will be saved locally for future reference.

---

That's it! You should now be able to run and interact with the Spotify Album Ratings app.

For more information about the Spotify Web API, visit their official documentation: [Spotify API Documentation](https://developer.spotify.com/documentation/web-api).
