'use strict';

const CACHE_NAME = "mws-restaurant-cache-v1";
const fileList = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
];

self.addEventListener('install', (ev) => {
    console.info("Install SW");
    ev.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => { cache.addAll(fileList) })
    )
});

self.addEventListener('fetch', (ev) => {
    ev.respondWith(
        caches.match(event.request)
            .then((res) => { res || fetch(ev.request) })
    );
});
