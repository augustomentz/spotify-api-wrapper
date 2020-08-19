# Spotify Wrapper

[![Build Status](https://travis-ci.com/augustomentz/spotify-api-wrapper.svg?branch=master)](https://travis-ci.org/augustomentz/spotify-wrapper) [![Coverage Status](https://coveralls.io/repos/github/augustomentz/spotify-api-wrapper/badge.svg?branch=master)](https://coveralls.io/github/augustomentz/spotify-api-wrapper?branch=master)

A wrapper to work with the [Spotify Web API](https://developer.spotify.com/web-api/).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
84+ ✔ | 79+ ✔ | 69+ ✔ | 13.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Spotify Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```sh
$ yarn add ahm-spotify-api-wrapper
```

## How to use

### ES6

```js
// to import a specific method
import SpotifyWrapper from 'ahm-spotify-api-wrapper';

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});

// using  method
spotify.search.artists('Incubus');
```

### CommonJS

```js
const SpotifyWrapper = require('ahm-spotify-api-wrapper').default;

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});
```

### UMD in Browser

```html

<!-- to import minified version -->
<script src="ahm-spotify-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `SpotifyWrapper`. Follow an example:

```js

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});

const albums = spotify.search.albums('Choosen Artist');
```

## Methods

> Follow the methods that the library provides.

### search.albums(query)

> Search for informations about Albums with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *album*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.albums('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

### search.artists(query)

> Search for informations about Artists with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *artist*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.artists('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

### search.tracks(query)

> Search for informations about Tracks with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *track*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.tracks('Drive')
  .then(data => {
    // do what you want with the data
  })
```

### search.playlists(query)

> Search for informations about Playlist with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *playlist*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.playlists('Happy Day')
  .then(data => {
    // do what you want with the data
  })
```
### album.getAlbum(id)

> Search for informations about a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|


**Example**

```js
spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### album.getAlbums(ids)

> Search for informations about some Albums with all id's. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-several-albums/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ids`   |*Array of strings* | ['id1', 'id2']|

**Example**

```js
spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '1A2GTWGtFfWp7KSQTwWOyo'])
  .then(data => {
    // do what you want with the data
  })
```

### album.getTracks(id)

> Search for all tracks in a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album-tracks/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|

**Example**

```js
spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### artist.getArtist(id)

> Search for a specific Artist. Test in [Spotify Web Console](https://developer.spotify.com/console/get-artist/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|

**Example**

```js
spotify.artist.getArtist('2Jw4Lrfjnyv2QsDoBgnrAP')
  .then(data => {
    // do what you want with the data
  })
```

### artist.getArtistAlbums(id)

> Search all albums of an Artist. Test in [Spotify Web Console](https://developer.spotify.com/console/get-artist-albums/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|

**Example**

```js
spotify.artist.getArtistAlbums('2Jw4Lrfjnyv2QsDoBgnrAP')
  .then(data => {
    // do what you want with the data
  })
```

### artist.getArtists(ids)

> Search for informations about some Artists with all id's. Test in [Spotify Web Console](https://developer.spotify.com/console/get-several-artists/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ids`   |*Array of strings* | ['id1', 'id2']|

**Example**

```js
spotify.artist.getArtists(['2Jw4Lrfjnyv2QsDoBgnrAP', '3qm84nBOXUEQ2vnTfUTTFC'])
  .then(data => {
    // do what you want with the data
  })
```

### track.getTrack(id)

> Search a track of an Artist. Test in [Spotify Web Console](https://developer.spotify.com/console/get-track/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|

**Example**

```js
spotify.track.getTrack('3QbPw4Aj3JgqG0In3ZPZ4q')
  .then(data => {
    // do what you want with the data
  })
```

### track.getTracks(ids)

> Search tracks of an Artist with all id's. Test in [Spotify Web Console](https://developer.spotify.com/console/get-several-tracks/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ids`   |*Array of strings* | ['id1', 'id2']|

**Example**

```js
spotify.track.getTracks(['3QbPw4Aj3JgqG0In3ZPZ4q', '7hjAhjnMzpMT9vU54w0LYF'])
  .then(data => {
    // do what you want with the data
  })
```

## Authors
[Augusto Mentz](https://github.com/augustomentz)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
