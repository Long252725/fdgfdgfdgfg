// import { useState, useEffect } from 'react';
const games = [{
    name: "Only Up",
    link: "https://www.google.com/search?q=mediafileupload&oq=mediafi&aqs=chrome.1.69i57j0i512l6j69i60.10534j0j7&sourceid=chrome&ie=UTF-8#vhid=_kXZOH7nC2tT8M&vssid=l",
    picture: "https://i.rada.vn/data/image/2023/05/27/Only-Up-200.png",
    date:"29/07/2022",
    topic: "Cốt truyện của game Only Up",
    content1:"Trong game mô phỏng Only Up Steam, bạn sẽ vào vai một" +
    " thiếu niên Jackie đến từ khu ổ chuột muốn thoát khỏi"+ 
     " cảnh nghèo đói và bắt đầu hành trình tìm hiểu về thế"+
     " giới và bản thân. Thế giới chắc chắn đã phát điên, mặc"+
     " dù nó chưa bao giờ bình thường, nhưng có lẽ bây giờ là"+ 
     " cơ hội dành cho bạn.",
    pic1:"https://i.rada.vn/data/image/2023/05/27/Only-Up-2.jpg",
    content2:"Khủng hoảng là thời điểm để hành động và thực hiện những bước đi quyết đoán, ngoại trừ điều đó thật đáng sợ, bởi vì mỗi bước đi đều có thể khiến bạn lùi lại. Đôi khi rất khó để chọn đúng con đường, nhưng đừng sợ, bạn luôn có thể lặp lại vì chúng ta học hỏi từ những sai lầm.    ",
    pic2:"https://i.rada.vn/data/image/2023/05/27/Only-Up-3.jpg",
    content3:"Jackie sẽ phải học được rằng để đến một nơi mới, trước tiên bạn phải thực hiện một cú nhảy và lên khỏi mặt đất mà không biết điều gì sẽ xảy ra trong tương lai… Một con người dũng cảm không có mục tiêu, chỉ có con đường, chủ nghĩa khắc kỷ, sự kiên nhẫn và ý chí mạnh mẽ mơi giúp bạn đạt đến đỉnh cao, nhưng điều gì đang chờ đợi ở trên đó - bạn không bao giờ biết được...",
    pic3:"https://i.rada.vn/data/image/2023/05/27/Only-Up-4.jpg",

},{
    name: "Sword Art Online: Integral Factor",
    link: "https://www.google.com/search?q=mediafileupload&oq=mediafi&aqs=chrome.1.69i57j0i512l6j69i60.10534j0j7&sourceid=chrome&ie=UTF-8#vhid=_kXZOH7nC2tT8M&vssid=l",
    picture: "https://i.rada.vn/data/image/2021/05/20/Sword-Art-Online-Integral-Factor-200.png",
    topic: "Cốt truyện của game Sword Art Online: Integral Factor",
    date:"29/07/2022",
    content1:"f",
    pic1:1,
    content2:"f",
    pic2:5,
    content3:"f",
    pic3:"f",
}, {
    name: "Internet Cafe Simulator 2",
    link: "https://web1s.io/2BRWBbTcaj",
    picture: "https://i.rada.vn/data/image/2021/05/15/Internet-Cafe-Simulator-2-200.png",
    topic: "Cốt truyện của game Internet Cafe Simulator 2",
    date:"29/07/2022",
    content1:"Tiếp tục trông quán net ngày đêm và làm giàu trong game mô phỏng Internet Cafe Simulator 2. Nếu đã chơi phần 1 của Internet Cafe Simulator, chắc chắn bạn sẽ háo hức với phần tiếp theo này bởi đồ họa, gameplay, nội dung… - tất cả đều được nâng cấp nhằm mang đến trải nghiệm tốt nhất cho người chơi!",
    pic1:"https://i.rada.vn/data/image/2021/05/15/Internet-Cafe-Simulator-2-mo-phong.jpg",
    content2:"Theo tiết lộ từ nhà phát triển, Internet Cafe Simulator 2 PC là phiên bản hoàn thiện hơn và chi tiết hơn so với phần đầu. Tất nhiên, bạn vẫn sẽ xây dựng 1 quán Internet cafe từ những viên gạch đầu tiên. Nhưng đừng để những tên côn đồ hay bọn lưu manh ngoài phố cướp tiền của bạn. Lần này, thậm chí chúng còn dám ném bom vào trong quán. Và hãy xem, bạn có thể làm gì trong tình huống này?",
    pic2:"https://i.rada.vn/data/image/2021/05/15/Internet-Cafe-Simulator-2-xay-dung.jpg",
    content3:"Giống như bất kỳ game mô phỏng nghề nghiệp nào, đặc biệt là game kinh doanh, bạn phải thu hút khách hàng nhiều hơn trong tất cả các ngày trong tuần. Những ngày mưa gió hay thời tiết xấu, lượng khách sẽ thưa dần. Đó là lúc cần tới chiến lược thông minh để hút khách đến quán bất chấp những điều kiện khách quan bên ngoài." +

    "Là ông chủ trong game Internet Cafe Simulator II đồng nghĩa với việc bạn phải cải thiện kỹ năng kinh doanh mỗi ngày. Bạn sẽ trở thành ông trùm ngành Internet cafe trong thành phố hay thất bại ngay từ “vòng gửi xe”?",
    pic3:"https://i.rada.vn/data/image/2021/05/15/Internet-Cafe-Simulator-2-nang-cap.jpg",
}, {
    name: "FIFA Online 4",
    link: "https://web1s.io/2BRWBbTcaj",
    picture: "https://i.rada.vn/data/image/2023/01/30/fifa-online-4-200.jpg",
    topic: "FIFA Online 4",
    date:"29/07/2022",
    content1:"FIFA Online 4 (FO4) là một tựa game thể thao trên máy tính do Garena phát triển và phát hành trong thời gian vừa qua. Trong trò chơi này, chúng ta sẽ hóa thân vào một nhà quản lý và huấn luyện viên của đội bóng theo ý thích của mình. Tại đây, bạn sẽ đưa ra những quyết định chuyển nhượng mua bán cầu thủ của CLB, thay đổi chiến thuật thi đấu theo phong cách riêng của mình",
    pic1:"https://i.rada.vn/data/image/2017/11/03/FIFA-Online-4-game.jpg",
    content2:"Không chỉ vậy, game FIFA Online 4 còn mang lại sự chân thực nhất cho người chơi, nên đã đăng ký bản quyền với hơn 32 giải đấu và hơn 15.000 cầu thủ nổi tiếng trên toàn thế giới, trong đó có cả các cầu thủ trong Đội tuyển Việt Nam. Từ đó, việc xây dựng đội bóng trong mơ giờ đây trở nên dễ dàng đối với mọi người.",
    pic2:"https://i.rada.vn/data/image/2017/11/03/FIFA-Online-4-choi-game.jpg",
    content3:"Tại mỗi trận đấu bóng trong game, người chơi sẽ điều kiển cầu thủ với góc nhìn thứ ba, game thủ có thể quan sát toàn trận đấu và quyết định chuyền, sút, hay thực hiện chiến thuật của riêng mình. Ở game FIFA Online 4, có rất nhiều chế độ chơi khác nhau.",
    pic3:"https://i.rada.vn/data/image/2020/11/19/fifa-online-4.jpg",
}]

function getValue() {
    let valueSearchInput = document.getElementById('search').value;
    
    if (valueSearchInput != ""){
        var userSearch = games.filter(value => {
            return value.name.toUpperCase().includes(valueSearchInput.toUpperCase())
        })
    }  else if (valueSearchInput == "") {
        var userSearch = [];
    }

    console.log(valueSearchInput)
    return renderSearch(userSearch)
}

function renderSearch(arr) {
    // console.log(arr)
    var html=``;
    
    arr.map(value => {
        html += `
                <div class="game-of-list" >
                    <div class="game-of-list-pic" id="game-of-list-pic" style="background: url('${value.picture}');     background-size: cover; "></div>
                    <div class="game-of-list--name " id="game-of-list--name">${value.name}</div>
                    </div>`
    })
      document.getElementById('lisGames').innerHTML = html; 
           
      var y = document.querySelectorAll('.game-of-list--name');
      for (let i = 0; i < y.length; i++) {
          y[i].onclick = function() {
              for (let j = 0; j<arr.length; j++) {
                if(arr[j].name == this.innerHTML) {
                    render(arr[i])
                }              
            } 
          }
      }

    //   thiet lap im kiem
    let am = document.getElementById('lisGames')
    am.onmouseleave = function() {
        am.style.display = "none";
    }
    let an = document.getElementById('search')
    an.onclick = function() {
        am.style.display = "block";
    }

}



    function render(x) {
        let y = [];
        y.push(x);
        var a = ``;
        y.map(value => {
            a+= `<div class="nameG font">${value.name}</div>
            <div class="game">
                <div class="pic" style="background: url('${value.picture}'); background-size: cover;"></div>
                <div class="info">
                <div class="infoa star"><i class="fa-solid fa-star" style="color: #5a8ce2;"></i>
                    <i class="fa-solid fa-star" style="color: #5a8ce2;"></i>
                    <i class="fa-solid fa-star" style="color: #5a8ce2;"></i>
                    <i class="fa-solid fa-star" style="color: #5a8ce2;"></i>
                    <i class="fa-solid fa-star" style="color: #5a8ce2;"></i></div>
                <div class="infoa date">${value.date}</div>
                <div class="infoa require">Yêu cầu:
                    Windows 8/10/11 (64-bit)</div>
                    <a href="${value.link}"><div class="btnDownload fontbold">Download Free Now</div></a>
                </div>
            </div>
            <div class="introduce font">
                <div class="itd">Giới Thiệu</div>
                <div class="itd">Cấu hình</div>
                <div class="itd">Tải về</div>
            </div>
            <div class="gioithieu" id="gioithieu">
            <div class="topic topic1 fontbold">
                       ${value.topic}
                    </div>
                    <div class="nd fontfit">
                        ${value.content1}
                    </div>
                    <img src="${value.pic1}" alt="">
                    <div class="nd fontfit">
                    ${value.content2}
                    </div>
                    <img src="${value.pic2}" alt="">
                    <div class="nd fontfit">
                    ${value.content3}
                    </div>
                    <img src="${value.pic3}" alt="">
                    
                </div>
                <div class="cauhinh">
                    <div class="topic fontbold">Cấu hình yêu cầu</div>
                    <div class="topic font">Tối thiểu</div>
                    <ul class="fontfit">
                        <li>Yêu cầu hệ điều hành và bộ xử lý 64-bit</li>
                        <li>Hệ điều hành: Windows 8/10/11 (64-Bit)</li>
                        <li>Bộ vi xử lý: Intel Core [email protected] 3.1 GHz hoặc AMD R5 1600X @ 3.5 GHz hoặc tương đương</li>
                        <li>Bộ nhớ RAM: 8GB bộ nhớ</li>
                        <li>Đồ họa: NVIDIA GeForce GTX 1650 hoặc tương đương</li>
                        <li>DirectX: phát hành 12</li>
                        <li>Không gian đĩa: 6 GB dung lượng đĩa khả dụng</li>
                    </ul>
                    <div class="topic font">Khuyến khích</div>
                    <ul class="fontfit">
                        <li>Yêu cầu hệ điều hành và bộ xử lý 64-bit</li>
                        <li>Hệ điều hành: Windows 8/10/11 (64-Bit)</li>
                        <li>Bộ vi xử lý: Intel Core i5 10400 3,1 GHz hoặc AMD Ryzen 5 2600x 3,1 GHz</li>
                        <li>Bộ nhớ RAM: 16GB bộ nhớ</li>
                        <li>Đồ họa: NVIDIA GeForce RTX 3060 hoặc tương đương</li>
                        <li>DirectX: phát hành 12</li>
                        <li>Không gian đĩa: 6 GB dung lượng đĩa khả dụng</li>
                    </ul>
                </div>
                <div class="download">
                    <div class="topic fontbold">Tải về</div>
                    <a href="${value.link}"><div class="btnDownload fontbold">Download Free Now</div></a>
    
                </div>
                
            `
        })
        // console.log(a)
        document.getElementById('main1').innerHTML = a;
        gamesLQ(games)
    }
function gamesLQ(arr) {
    
    let html = ``;
    
    arr.map(value=> {
        html += ` <div class="gamelq">
                 <div class="gamelq_pic" style="background: url('${value.picture}'); background-size: cover;"></div>
                 <div class="gamelq_name fontfit">${value.name}</div>
               <div class="gamelq_intro">Khám phá vũ trụ trên máy tính</div>
           </div>`
    })
    document.querySelector('.khogamelq').innerHTML = html
}

