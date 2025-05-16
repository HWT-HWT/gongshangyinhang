function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function onSomeEvent (url){
	const hasAccount = uni.getStorageSync('account');
	if(hasAccount){
		uni.navigateTo({
			url
		})
	}else{
		uni.navigateTo({
			url:'/pages/gesture/gesture'
		})
	}
	
}

const debouncedGologin = debounce(function(url) {
    onSomeEvent(url);
}, 500);

export function gologin(url) {
  debouncedGologin(url);
}