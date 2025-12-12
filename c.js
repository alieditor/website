const buttons = document.querySelectorAll('.video-type-btn');
const confirmBtn = document.querySelector('.confirm-btn');
const videoList = document.getElementById('videoList');
const videoPlayer = document.getElementById('videoPlayer');

let selectedType = '';

// فعال‌سازی انتخاب نوع ویدیو
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedType = btn.dataset.type;
  });
});

// دیتای نمونه برای لیست ویدیوها
const videos = {
  instagram: [
    { title: "ویدیو اینستا ۱", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "ویدیو اینستا ۲", url: "https://sample-videos.com/video123/mp4/480/asdasdas.mp4" },
  ],
  youtube: [
    { title: "ویدیو یوتیوب ۱", url: "https://www.w3schools.com/html/movie.mp4" },
    { title: "ویدیو یوتیوب ۲", url: "https://sample-videos.com/video123/mp4/480/big_buck_bunny.mp4" },
  ],
  tiktok: [
    { title: "ویدیو تیک‌تاک ۱", url: "https://sample-videos.com/video123/mp4/480/small.mp4" },
    { title: "ویدیو تیک‌تاک ۲", url: "https://sample-videos.com/video123/mp4/480/sample.mp4" },
  ],
};

// کلیک روی دکمه تأیید برای بارگذاری لیست
confirmBtn.addEventListener('click', () => {
  if (!selectedType) {
    alert("لطفاً نوع ویدیو را انتخاب کنید!");
    return;
  }

  const list = videos[selectedType];
  videoList.innerHTML = '';
  list.forEach(v => {
    const item = document.createElement('div');
    item.classList.add('video-item');
    item.textContent = v.title;
    item.addEventListener('click', () => {
      videoPlayer.innerHTML = `
        <video controls autoplay style="width:100%; height:100%; border-radius:8px;">
          <source src="${v.url}" type="video/mp4">
        </video>`;
    });
    videoList.appendChild(item);
  });
});
