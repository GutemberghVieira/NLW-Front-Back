
interface ProgressBarProps{
    progress: number
}


export function ProgressBar(props: ProgressBarProps){
 
  
 

    return(

        <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4 ">
        <div 
        role="progressbar"
        aria-label="Progresso De hábitos completados nesse dia"
        aria-valuenow={props.progress}
        
        className="h-3 rounded-xl bg-orange-600 transition-all"
        style={{
    
            width: `${props.progress}%`,
            maxWidth:'100%'
        }}
        />
        </div>

    )
}