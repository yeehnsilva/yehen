


const obj = {
    TLSSocket: {
      parser: {
        HTTPParser: {
          socket: null // Circular reference back to TLSSocket
        }
      }
    }
  };
  
  const replacer = (key, value) => {
    if (key === 'socket' && value !== null) {
      return '[Circular Reference]';
    }
    return value;
  };
  
  const jsonString = JSON.stringify(obj, replacer, 2);
  console.log(jsonString);

  emitter.setMaxListeners(500)