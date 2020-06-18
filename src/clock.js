const intl = new Intl.DateTimeFormat(["es-ES"], {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

export const clock = () => {
  document.querySelector(".clock").innerHTML = intl.format(new Date());
  setTimeout(clock, 1000);
};
