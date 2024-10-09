function hieuUngTuyetRoi(hinhAnh) {
    const body = document.body;
  
    setInterval(() => {
      const tuyet = document.createElement('img');
      tuyet.src = hinhAnh;
  
      // Thêm bông tuyết vào body
      body.appendChild(tuyet);
  
      // Thiết lập CSS
      tuyet.style.position = 'absolute';
      tuyet.style.left = Math.random() * window.innerWidth + 'px';
      tuyet.style.top = '-50px';
      tuyet.style.width = `${Math.random() * 10 + 5}px`; // Kích thước ngẫu nhiên
      tuyet.style.zIndex = -1; // Đặt bông tuyết đằng sau các nội dung khác
  
      // Tốc độ rơi ngẫu nhiên
      const tocDo = Math.random() * 2 + 1;
      let top = 0;
  
      const interval = setInterval(() => {
        top += tocDo;
        tuyet.style.top = top + 'px';
  
        if (top > window.innerHeight) {
          body.removeChild(tuyet);
          clearInterval(interval);
        }
      }, 10);
    }, 100);
  }
  
  // Gọi hàm
  hieuUngTuyetRoi('themes/Tet2025/icons/TT.png'); // Thay thế 'anh_tuyet.png' bằng đường dẫn đến hình ảnh bông tuyết
