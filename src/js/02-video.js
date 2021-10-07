'use strict';

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const qs = selector => document.querySelector(selector);

const setTime = seconds => localStorage.setItem(LOCALSTORAGE_KEY, seconds);
const getTime = () => localStorage.getItem(LOCALSTORAGE_KEY);
const iframe = qs('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

const settingTime = time => {
  player
    .setCurrentTime(time())
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;
        default:
          break;
      }
    });
};

const gettingTime = () => {
  player
    .getCurrentTime()
    .then(function (seconds) {
      setTime(seconds);
      console.log(seconds);
    })
    .catch(function (error) {});
};

settingTime(getTime);

player.on('timeupdate', throttle(gettingTime, 1000));