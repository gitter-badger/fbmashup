'use strict';

module.exports = function(Frame) {
	Frame.afterRemote('**', function(ctx, result, next) {
		console.log('2');
		if(ctx.result) {
			console.log('2');
		    if(Array.isArray(ctx.result)) {
		      ctx.result.forEach(function (result) {
		        var  is_logged_in = ctx.req.accessToken;
		        if(is_logged_in == null){
		        	console.log('1');
		        	result.unsetAttribute('created_by')
		        	result.unsetAttribute('female_share_count')
		        }
		      });
		    } else {
		    	console.log('2');
		      ctx.result.unsetAttribute('created_by')
		      ctx.result.unsetAttribute('female_share_count')
		    }
		  }

		  next();
	});

	Frame.getName = function(shopId, cb) {
		console.log('test');
		console.log(shopId);
		Frame.updateAll({name: shopId}, {name: 'new_name'}, function(err, info) {
			if(err){
				console.log(err);
				return err;
			}
   			console.log(info)
   			return info;
		});
	   
  	}

  
};
