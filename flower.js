function hoaRoi('themes/Tet2025/icons/TT.png') {
    const container = document.getElementById('container'); // Thay thế 'container' bằng ID của container chứa các bông hoa
  
    setInterval(() => {
      const hoa = document.createElement('img');
      hoa.src = 'themes/Tet2025/icons/TT.png';
      hoa.style.position = 'absolute';
      hoa.style.left = Math.random() * window.innerWidth + 'px';
      hoa.style.top = '-50px'; // Bắt đầu từ phía trên màn hình
  
      const tocDo = Math.random() * 5 + 1; // Tốc độ rơi ngẫu nhiên từ 1 đến 5
      let top = 0;
  
      const interval = setInterval(() => {
        top += tocDo;
        hoa.style.top = top + 'px';
  
        if (top > window.innerHeight) {
          container.removeChild(hoa);
          clearInterval(interval);
        }
      }, 10);
  
      container.appendChild(hoa);
    }, 100); // Tạo một bông hoa mới sau mỗi 100ms
  }
  
  // Ví dụ sử dụng:
  hoaRoi('anh_hoa.png'); // Thay thế 'anh_hoa.png' bằng đường dẫn đến hình ảnh của bạn
