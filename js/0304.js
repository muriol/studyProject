// 디자인 패턴
// GIT
// 자바스크립트 디자인패턴
/*

    모듈 패턴
    싱클톤 패턴
    프로토타입 패턴
//    옵져버 패턴
//    프라미스 패턴

*/

// 디자인 패턴?
/*

    구조화 되어진 코드 -> 유지 보수, 협업, 재사용(코드 하나로 여럿이 사용)에 용이

*/




// 모듈 패턴
// public(공통된 것) 과 private(보호된 것)의 공간을 분리 하기 위해서 사용
// 모듈 내부에서 생성된 퍼블릭 공간은 프라이빗 공간에 접근할 수 있다.(프라이빗 공간 외부에서는 접근이 불가능하다)

var module = (function() {
    
    // private 영역
    var data = 10;
    
    var test = function() {
        console.log(data+1);
    };
    
    return {
        
        // public 영역
        number : 10,
        getData : function() {
            return data;    // private 영역의 data
        },
        setData : function() {
            data += 10;
        },
        testFunc : function() {
            test();
        }
        
    }
})();    // 자체 호출 <- module(); 하고 호출하는 것처럼... module 변수에 return값이 담김

console.log(module.data);   // 이런식으로는 접근 불가(undefined)
module.setData();
console.log(module.getData());

//module.test();    // 역시 이렇게는 호출 불가
module.testFunc();  // 퍼블릭 영역에서 접근할 수 있게 하나 만들어줘야 한다




// ==============================================================================
// 싱글톤 패턴
// 오직 하나의 객체만 가지고 서로 공유하는 디자인 패턴
// 대표적인 예로 리터널(보이는 그대로의) 객체

var single = (function() {
    
    var instance;
    var data = 10;
    
    function init() {
        return {
            number : 10,
        }
    }
    
    return {
        getInstance : function() {
            if( !instance ) {
                instance = init();
            }   // 한번 들어간 내용이 바뀌지 않게 된다.
            return instance;
        }
    }
    
})();

var a = single.getInstance();
var b = single.getInstance();
console.log( a === b );




// ==============================================================================
// 프로토타입 패턴(생성자) - 상속이라는 개념이 있다면 이걸 사용
// 프라이빗 영역이 없음 >>> 모듈 패턴과 융함해서 프라이빗 영역을 만든다

var pro = function() {
    this.number = 10;
};

pro.prototype = (function() {
    
    var getNumber = function() {
        console.log('a');
    };
    var setNumber = function() {
        
    };
    
    return {
        get : getNumber,
    }
})();   // 본래 프로토타입 패턴은 함수를 자체호출하진 않는다(모듈과 융합하려면 자체호출 필요)

var c = new pro;
var d = new pro;    // 서로 공유하지 않는다.

console.log(c.number);
c.get();
console.log( c === d );



























