import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [authtoken, setAuthtoken] = useState(true);
    const username = 'admin';
    const password = '1234';

    const [formData1, setFormData1] = useState({
        Title: "",
        ArtistID: "",
        Album: "",
        ReleaseYear: "",
        DurationInSeconds: "",
        new_artist: "",
        thumbnail: "",
        url: "",
    })

    const [formData2, setFormData2] = useState({
        name: "",
        imagePath: "",
    })

    const handleClick = () => {
        console.log(authtoken);
        setAuthtoken(false);
    };

    const handleInputChange1 = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormData1({ ...formData1, [name]: value });
    }

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setFormData2({ ...formData2, [name]: value });
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        const formData1 = new FormData(e.target);
        const enteredUsername = formData1.get('username');
        const enteredPassword = formData1.get('password');

        if (enteredUsername === username && enteredPassword === password) {
            console.log('Login successful');
            handleClick();
        } else {
            console.log('Invalid username or password');
        }
    };

    const handlepostsongs = (e) => {
        axios
            .post("http://localhost:5000/api/songs", formData1)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const handlepostartists = (e) => {
        axios.post("http://localhost:5000/api/artists", formData2)
            .then((response) => {
                console.lof(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='admin-page'>
            {authtoken ? (
                <form onSubmit={handlesubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="username"
                            name="username"
                            required
                        ></input>
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                        ></input>
                    </div>
                    <div>
                        <button type="submit">Sign In</button>
                    </div>
                </form>
            ) : (
                <div className='admin-inside'>
                    <div className='admin-artistadd'>
                        <form className='admin-artistform'>
                            <h1>Enter the artist name</h1>
                            <input
                                type="text"
                                placeholder='artistname'
                                value={formData2.name}
                                name='name'
                                onChange={handleInputChange2}
                                required
                            >
                            </input>
                            <h1>Artist profile pic:</h1>
                            <input
                                type="text"
                                placeholder='artistdp'
                                value={formData2.imagePath}
                                name='imagePath'
                                onChange={handleInputChange2}
                                required
                            >
                            </input>
                            <button type="submit" onClick={handlepostartists}>
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className='admin-songadd'>
                        <form className='admin-songform'>
                            <h1>Enter the song name</h1>
                            <input
                                type="text"
                                placeholder='songname'
                                value={formData1.Title}
                                name='Title'
                                onChange={handleInputChange1}
                                required

                            ></input>
                            <h1>Artist id</h1>
                            <input
                                type="number"
                                placeholder='artistid'
                                value={formData1.ArtistID}
                                name='ArtistID'
                                onChange={handleInputChange1}
                                required

                            ></input>
                            <h1>Album</h1>
                            <input
                                type="text"
                                placeholder='album'
                                value={formData1.Album}
                                name='Album'
                                onChange={handleInputChange1}
                                required

                            ></input>
                            <h1>Release Year:</h1>
                            <input
                                type="number"
                                placeholder='release year'
                                name='ReleaseYear'
                                value={formData1.ReleaseYear}
                                onChange={handleInputChange1}
                                required

                            ></input>
                            <h1>Duration in Seconds</h1>
                            <input
                                type="number"
                                placeholder='duration'
                                value={formData1.DurationInSeconds}
                                name='DurationInSeconds'
                                onChange={handleInputChange1}
                                required

                            ></input>
                            <h1>New_artist</h1>
                            <input
                                type="text"
                                placeholder='new_artist'
                                value={formData1.new_artist}
                                name='new_artist'
                                onChange={handleInputChange1}
                                required

                            ></input>
                            <h1>Thumbnail</h1>
                            <input
                                type="text"
                                placeholder='thumbnail'
                                value={formData1.thumbnail}
                                name='thumbnail'
                                onChange={handleInputChange1}
                                required

                            ></input>
                            <h1>Url</h1>
                            <input
                                type="text"
                                placeholder='url'
                                value={formData1.url}
                                name='url'
                                onChange={handleInputChange1}
                                required

                            ></input>
                            <button type="submit" onClick={handlepostsongs}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
