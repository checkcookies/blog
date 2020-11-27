<template>
  <div>
    <audio ref="audio" @ended="next"></audio>
    <div class="flex music-container">
      <img
        class="music-img"
        :class="!isStop && isPlay ? 'rotate' : 'rotate pause-rotate'"
        src="../../assets/images/music/music.svg"
        @click="!isPlay ? play() : pause()"
      />
      <div class="music-introduce">
        <transition name="slide-fade">
          <span v-if="isPlay" class="music-title flex"
            >{{ playMusicTitle }}
            <img class="play-img" @click="next" src="../../assets/images/music/play.gif" style="float:right;cursor:pointer;height:10px;width:22px" />
          </span>
        </transition>
      </div>
    </div>
    <!-- <transition name="slide-fade">
      <div v-if="isPlay" class="gif-container">
        <img style="height:100%" src="../../assets/images/music/playing.gif" />
      </div>
    </transition> -->
  </div>
</template>

<script>
import { baseMusicUrl } from '../../utils/config'
export default {
  data() {
    return {
      isPlay: false,
      isStop: false,
      isHover: false,
      playList: [],
      currentIndex: 0,
      musicList: [
        {
          title: '听妈妈的话_周杰伦.mp3',
          url: `${baseMusicUrl}/听妈妈的话_周杰伦.mp3`,
        },
        {
          title: '彩虹-周杰伦.m4a',
          url: `${baseMusicUrl}/彩虹-周杰伦.m4a`,
        },
        {
          title: '夏天的风-温岚.m4a',
          url: `${baseMusicUrl}/夏天的风-温岚.m4a`,
        },
        {
          title: '风吹麦浪-李健.m4a',
          url: `${baseMusicUrl}/风吹麦浪-李健.m4a`,
        },
        {
          title: '说好的幸福呢-周杰伦.m4a',
          url: `${baseMusicUrl}/说好的幸福呢-周杰伦.m4a`,
        },
        {
          title: '稻香_周杰伦.mp3',
          url: `${baseMusicUrl}/稻香_周杰伦.mp3`,
        },
        {
          title: '最长的电影_周杰伦.mp3',
          url: `${baseMusicUrl}/最长的电影_周杰伦.mp3`,
        },
        {
          title: '房东的猫 - 云烟成雨.mp4',
          url: `${baseMusicUrl}/房东的猫 - 云烟成雨.mp4`,
        },
      ],
    }
  },
  computed: {
    audio() {
      return this.$refs.audio
    },
    playMusicUrl() {
      return this.playList[this.currentIndex].url
    },
    playMusicTitle() {
      return this.playList[this.currentIndex].title
    },
  },
  mounted() {
    // 随机打乱播放顺序
    this.playList = this.musicList.sort(() => 0.5 - Math.random())
    this.init()
  },
  methods: {
    // 初始化
    init() {
      this.audio.src = this.playMusicUrl
      this.audio.volume = 0.5
    },
    play() {
      this.audio.play()
      this.isPlay = true
    },
    pause() {
      this.audio.pause()
      this.isPlay = false
    },

    // next
    next() {
      setTimeout(() => {
        this.currentIndex = this.currentIndex === this.playList.length - 1 ? 0 : ++this.currentIndex
        this.audio.src = this.playMusicUrl
        this.play()
      }, 300)
    },
  },
}
</script>

<style lang="scss" scoped>
@media screen and(min-width: 1000px) {
  .music-container {
    justify-content: center;
    align-items: center;
    .music-img {
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transform: scale(1.2);
      }
    }
    .music-introduce {
      width: 300px;
      margin-left: 2rem;
      .music-title {
        display: flexbox;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding: 8px 10px;
        transition: 0.3s;
      }
    }
  }
}

@media screen and(max-width: 1000px) {
  .music-container {
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    .music-img {
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transform: scale(1.2);
      }
    }
    .music-introduce {
      width: 300px;
      margin-left: 2rem;
      .music-title {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        padding: 8px 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: 0.3s;
        .play-img {
          display: none;
        }
      }
    }
  }
}

.rotate {
  animation: rotateImg 2s linear infinite;
}

.pause-rotate {
  animation-play-state: paused;
}

// 旋转动画
@keyframes rotateImg {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
