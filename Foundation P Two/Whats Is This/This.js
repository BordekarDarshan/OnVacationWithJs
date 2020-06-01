let identity = {
  name: "Darshan",
  message: function () {
    return `Hey ${this.name}`;
  },
};

console.log(identity.message());
