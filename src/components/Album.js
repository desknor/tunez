import React, { Component } from 'react';
import albumData from './../data/Album';

class Album extends Component {
    constructor(props) {
        super(props);

        const album = albumData.find( album => {
            return album.slug === this.props.match.params.slug
        });

        this.state = {
            album: album,
            currentSong: album.songs[0],
            currentTime: 0,
            duration: album.songs[0].duration,
            isPlaying: false,
            volume: 0.5,
            isHovered: false
        };

        this.audioElement = document.createElement('auido');
        this.audioElement.src = album.songs[0].audioSrc;
    }

    play() {
        this.audioElement.play();
        this.setState({ isPlaying: true });
    }

    pause() {
        this.audioElement.pause();
        this.setState({ isPlaying: false });
    }

    setSong(song) {
        this.audioElement.src = song.audioSrc;
        this.setState({ currentSong: song });
    }

    handleSongClick(song) {
        const isSameSong = this.state.currentSong === song;
        if (this.state.isPlaying && isSameSong) {
            this.pause();
        } else {
          if (!isSameSong) { 
            this.setSong(song); 
        }
            this.play();
        }
    }

    hoverOn(index) {
        this.setState({ hover: index })
    }

    hoverOff() {
        this.setState({ hover: false })
    }

    renderButton(song, index) {
        if (this.state.isPlaying && this.state.currentSong === song) {
            return (<button><span className="icon ion-md-pause"></span></button>)
        } else if (!this.state.isPlaying && this.state.currentSong === song) {
            return (<button><span className="icon ion-md-play"></span></button>)
        } else if (this.state.hover === index) {
            return (<button><span className="icon ion-md-play"></span></button>)
        } else {
            return (<span>{index + 1}</span>)
        }
    }
   

    render() {
        return (
    <section className="album">
        <section id="album-info">
            <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
            <div className="album-details">
                <div id="album-title">{this.state.album.title}</div>
                <div className="artist">{this.state.album.artist}</div>
                <div id="release-info">{this.state.album.releaseInfo}</div>
            </div>
        </section>
        <table>
            <colgroup>
                <col id="song-number-column" />
                <col id="song-title-column" />
                <col id="song-duration-column" />
            </colgroup>
            <tbody>
                {
                    this.state.album.songs.map((song, index) =>
                    <tr
                        onMouseEnter={() => this.hoverOn(index)}
                        onMouseLeave={() => this.hoverOff()}
                    className="song" key={index} onClick={() => this.handleSongClick(song)} >
                            <td>{this.renderButton(song, index)}</td>
                            <td>{song.title}</td>
                            <td>{song.duration}</td>   
                    </tr>
                  )
                }
            </tbody>
        </table>
    </section>

      )
   }
}

export default Album;