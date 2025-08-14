// 复制IP功能
document.addEventListener('DOMContentLoaded', function() {
    // 复制IP功能
    const copyBtns = document.querySelectorAll('.copy-btn');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const ip = this.previousElementSibling ? 
                        this.previousElementSibling.textContent : 
                        this.parentElement.querySelector('input').value;
            
            navigator.clipboard.writeText(ip).then(() => {
                const originalText = this.textContent;
                this.textContent = '已复制!';
                
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
    });

    // 方块浮动效果增强
    const floatingCubes = document.querySelectorAll('.floating-cube');
    floatingCubes.forEach(cube => {
        cube.addEventListener('mouseover', () => {
            cube.style.transform = 'scale(1.1)';
            cube.style.boxShadow = '0 15px 35px rgba(33, 150, 243, 0.6)';
        });
        
        cube.addEventListener('mouseout', () => {
            cube.style.transform = '';
            cube.style.boxShadow = '';
        });
    });

    // 规则页面同意按钮
    const agreeCheckbox = document.getElementById('agree');
    const joinButton = document.getElementById('join-btn');
    
    if (agreeCheckbox && joinButton) {
        agreeCheckbox.addEventListener('change', function() {
            if (this.checked) {
                joinButton.classList.remove('disabled');
                joinButton.disabled = false;
            } else {
                joinButton.classList.add('disabled');
                joinButton.disabled = true;
            }
        });
    }
    
    // 加入服务器按钮动画
    const joinButtons = document.querySelectorAll('.primary-btn');
    joinButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
    
    // 页面滚动动画
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card, .rule-card, .step').forEach(card => {
        observer.observe(card);
    });
});
