(function () {
  var target = 'https://halo.whstu.dpdns.org';
  var message = '新网站构建中，是否前往';

  fetch(target, { method: 'HEAD', mode: 'cors', cache: 'no-store' })
    .then(function (response) {
      if (response.status === 200 && window.confirm(message)) {
        window.location.href = target;
      }
    })
    .catch(function () {
      // 请求失败或跨域受限时不做处理
    });
})();
