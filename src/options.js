const time = document.getElementById("time");

const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");

chrome.storage.sync.get(["time"], data => {
  console.log(data);
  time.value = typeof data.time === "number" ? data.time : 10;
});

saveBtn.addEventListener("click", () =>
  chrome.storage.sync.set({ time: time.value }, close)
);

resetBtn.addEventListener("click", () =>
  chrome.storage.sync.set({ time: 10 }, close)
);
