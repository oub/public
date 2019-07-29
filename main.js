(() => {
  const log = text => {
    const node = document.getElementById('log');
    node.innerHTML = `${node.innerHTML}<li>&gt;${text}</li>`;
  };
  const init = () => {
    log('starting...');
    navigator.bluetooth
      .requestDevice({
        filters: [
          {
            name: 'POSFAB04'
          }
        ]
        //optionalServices: ['battery_service']
      })
      .then(device => {
        log(`^-^ ${device}`);
        /* ... */
      })
      .catch(error => {
        log(`[ERROR] ${error}`);
      });
  };

  init();
})();
