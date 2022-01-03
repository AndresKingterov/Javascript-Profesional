
export default MediaPlayer;
    
    
  function MediaPlayer(config){
        this.media =config.el 
        this.plugins = config.plugins || []; 

        this._initPlugins();
       };


   MediaPlayer.prototype._initPlugins = function(){
          this.plugins.forEach(plugin => {
            plugin.run(this);
          });
   };

       
   MediaPlayer.prototype.play = function(){
          this.media.play();
        };
   MediaPlayer.prototype.pause = function(){
          this.media.pause();
        };  
   MediaPlayer.prototype.mute = function(){
          this.media.muted = true;
        };        

   MediaPlayer.prototype.mudeonmute = function(){
          if(this.media.muted === true){
            this.media.muted = false;
          } else {
            this.media.muted = true;
          }
   }     

   MediaPlayer.prototype.togglePlay =  function()
        {      if(this.media.paused){
                    this.play();
                }else{
                  this.pause();
                }
        };     