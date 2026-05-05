(function () {
  var target = 'https://halo.whstu.dpdns.org';
  var message = '新网站构建中，是否前往';
  var timeoutMs = 4000;

  function promptAndRedirect() {
    if (window.confirm(message)) {
      window.location.href = target;
    }
  }

  var controller = new AbortController();
  var timer = setTimeout(function () {
    controller.abort();
  }, timeoutMs);

  fetch(target, {
    method: 'GET',
    mode: 'no-cors',
    cache: 'no-store',
    signal: controller.signal
  })
    .then(function () {
      clearTimeout(timer);
      // no-cors 下响应通常是 opaque，无法读取 status，但能进入 then 说明目标可达。
      promptAndRedirect();
    })
    .catch(function (error) {
      clearTimeout(timer);
      // 保留日志便于排查网络/跨域问题。
      console.warn('[halo-check] 无法连接目标站点：', error);
    });
})();
