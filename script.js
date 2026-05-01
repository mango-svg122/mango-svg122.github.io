<<<<<<< HEAD
=======
// 添加动态粒子网络背景
document.addEventListener('DOMContentLoaded', function() {
    // 创建粒子网络背景
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-network';
    document.body.appendChild(particleContainer);
    
    // 初始化粒子网络
    initParticleNetwork(particleContainer);
});

// 粒子网络初始化函数
function initParticleNetwork(container) {
    // 创建Canvas元素用于粒子动画
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    container.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 100;
    
    // 创建粒子
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            color: '#45A29E',
            speed: Math.random() * 2 + 1
        });
    }
    
    // 绘制粒子
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            // 绘制粒子
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });
        
        requestAnimationFrame(drawParticles);
    }
    
    drawParticles();
}

>>>>>>> 2d0e0c7 (Update styles and layout)
// 添加滚动效果监听
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
<<<<<<< HEAD
});

// 可以添加更多交互逻辑
=======
});
>>>>>>> 2d0e0c7 (Update styles and layout)
