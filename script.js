/*
design by 108
*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Kiss me more",
          artist: "Doja cat",
          cover: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7bf8709e-c066-4e76-939f-bc66715cbc7f/dei1yck-f1053bf2-c5a9-4806-8b6c-c1452c421b31.jpg/v1/fill/w_894,h_894,q_70,strp/doja_cat___kiss_me_more__feat__sza__by_platinumcovers_dei1yck-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzdiZjg3MDllLWMwNjYtNGU3Ni05MzlmLWJjNjY3MTVjYmM3ZlwvZGVpMXljay1mMTA1M2JmMi1jNWE5LTQ4MDYtOGI2Yy1jMTQ1MmM0MjFiMzEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.A7bodjqXMITPqr-yY7UdOmeQ37i1S8LN6pTNMqMlA5w",
          source: "https://server1.indiryuklemp3.org/mp3_files/222967677b07fb17eafcd4a107608f0a.mp3",
          url: "https://server1.indiryuklemp3.org/mp3_files/222967677b07fb17eafcd4a107608f0a.mp3",
          favorited: false
        },
        {
          name: "Save your tears remix",
          artist: "The Weeknd & Ariana Grande",
          cover: "https://images.genius.com/56f2a02a8d9682b4381048368902b3c0.1000x1000x1.jpg",
          source: "https://opradre.com/wp-content/uploads/2021/05/The-Weeknd-%E2%80%93-Save-your-Tears-Remix-ft.-Ariana-Grande-.mp3",
          url: "https://opradre.com/wp-content/uploads/2021/05/The-Weeknd-%E2%80%93-Save-your-Tears-Remix-ft.-Ariana-Grande-.mp3",
          favorited: false
        },
        {
          name: "Save your tears remix",
          artist: "The Weeknd & Ariana Grande",
          cover: "https://images.genius.com/56f2a02a8d9682b4381048368902b3c0.1000x1000x1.jpg",
          source: "ari.mp3",
          url: "ari.mp3",
          favorited: false
        },
        {
          name: "I feel it coming",
          artist: "The Weeknd",
          cover: "https://i1.sndcdn.com/artworks-000224458295-of4yea-t500x500.jpg",
          source: "https://server1.indiryuklemp3.org/mp3_files/6159c1a0d45fc25fdcf67c6427d97409.mp3",
          url: "https://server1.indiryuklemp3.org/mp3_files/6159c1a0d45fc25fdcf67c6427d97409.mp3",
          favorited: false
        },
        {
          name: "Lost on you",
          artist: "LP",
          cover: "https://i1.sndcdn.com/artworks-000216747177-ofg9gh-t500x500.jpg",
          source: "https://server1.indiryuklemp3.org/mp3_files/deb17e07fa32d3f322289a491f85bb97.mp3",
          url: "https://server1.indiryuklemp3.org/mp3_files/deb17e07fa32d3f322289a491f85bb97.mp3",
          favorited: false
        },
        {
          name: "Like a stone",
          artist: "Audislave",
          cover: "https://i1.sndcdn.com/artworks-000420882543-ly7udp-t500x500.jpg",
          source: "https://mp3indirdur.life/Audioslave-Like-a-Stone-120716?dinle=1",
          url: "https://mp3indirdur.life/Audioslave-Like-a-Stone-120716?dinle=1",
          favorited: false
        },
        {
          name: "Losing my religion",
          artist: "R.E.M",
          cover: "https://upload.wikimedia.org/wikipedia/en/7/72/R.E.M._-_Losing_My_Religion.jpg",
          source: "https://server1.indiryuklemp3.org/mp3_files/77965408438ae64d9a077e14b28d4060.mp3",
          url: "https://server1.indiryuklemp3.org/mp3_files/77965408438ae64d9a077e14b28d4060.mp3",
          favorited: false
        },
        {
          name: "Sweet child o' mine",
          artist: "Guns N Roses",
          cover: "https://i1.sndcdn.com/artworks-000224807995-lkaqbq-t500x500.jpg",
          source: "https://server1.indiryuklemp3.org/mp3_files/547ea4645425bfa20b38c2f940a70bfc.mp3",
          url: "https://server1.indiryuklemp3.org/mp3_files/547ea4645425bfa20b38c2f940a70bfc.mp3",
          favorited: false
        },
        {
          name: "November Rain",
          artist: "Guns N Roses",
          cover: "https://i1.sndcdn.com/artworks-000242894805-urjqqm-t500x500.jpg",
          source: "https://server1.indiryuklemp3.org/mp3_files/22c3069e40c5caf9ab6b7493f7eb895c.mp3",
          url: "https://server1.indiryuklemp3.org/mp3_files/22c3069e40c5caf9ab6b7493f7eb895c.mp3",
          favorited: false
        },
        {
          name: "Angelica",
          artist: "Anathema",
          cover: "https://4.bp.blogspot.com/-AprVFfwFnM8/TZcJeZ7iTFI/AAAAAAAAABQ/lz4fBAQaG74/s320/eternity.jpg",
          source: "https://bedavamuzik.biz/A4F3774A977FA4F9781D3E3AB865C0D6B2055E2D.BBD70ACFF98BC918BFDDAE80F927AAD25EF56E063FAAE8D5414074D5ED66446E165F817B8394595D999F55F58879767819E41A9CD262836222B74AD8-4rXPcUH7Qu8&quality=360-AE8D5414074D5ED66446E165F817B83945.mp3",
          url: "https://bedavamuzik.biz/A4F3774A977FA4F9781D3E3AB865C0D6B2055E2D.BBD70ACFF98BC918BFDDAE80F927AAD25EF56E063FAAE8D5414074D5ED66446E165F817B8394595D999F55F58879767819E41A9CD262836222B74AD8-4rXPcUH7Qu8&quality=360-AE8D5414074D5ED66446E165F817B83945.mp3",
          favorited: true
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});