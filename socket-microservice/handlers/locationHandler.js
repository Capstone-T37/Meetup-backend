module.exports = (io, socket) => {
    const readLocation = (location) => {
      console.log(location);
      socket.broadcast.emit("location:read",location);
    }
    socket.on("location:read", readLocation);
  }