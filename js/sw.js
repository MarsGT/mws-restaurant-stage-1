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

// 安装阶段开启缓存
self.addEventListener('install', (ev) => {
    console.info("Install:SW");
    ev.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => { cache.addAll(fileList) })
    )
});

// 枚举原有缓存并检查版本标记，如果比现有版本旧那么就删掉旧版
self.addEventListener('activate', (ev) => {
    console.info('Activate:SW');
    ev.waitUntil(
        caches.keys()
            .then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.info('Removing[', key, ']:SW');
                        return caches.delete(key);
                    }
                }));
            })
    );
});

// 拦截fetch处理返回的Request
self.addEventListener('fetch', (ev) => {
    ev.respondWith(
        caches.match(ev.request)
            .then((res) => { res || fetch(ev.request) })
    );
});
