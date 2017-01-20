const env= process.env;

//export contstants require destructuring
export const nodeEnv = env.NODE_ENV || 'development'

//export function, need destructuring
export const logStarts = function(message){
  console.info('********');
  console.info(message);
  console.info('********');
}

//export defaults, does not require destructuring
export default {
  port: env.PORT || 3000
};
