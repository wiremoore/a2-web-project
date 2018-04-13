@extends('event.events')

@section('content')

<div class="card-container">
    
    @foreach ($ideas as $idea)
    <div class="card_idea"> 
                
                 <div class ="idea_title">
                         <h2>{{ $idea->name }}</h2>
                         <div><span>{{ $idea->getPoll() }}</span><i class="fas fa-thumbs-up"></i></div>
                 </div>
            
                     <div class="card_img"> 
                          <img src="{{ $idea->url_img }}">
                     </div>

                    <div class="card_descrip"> 
                         <p>{{ $idea->description }}</p>
                    </div>
            
                    <div class="idea_detail">
                        <a href="/events/ideas/{{ $idea->id }}"><button type="button">Voir détails</button></a>
                    </div>
    </div>
    @endforeach
</div>   

<div class="idea_button">
    <a href="/events/ideas/create"><button type="button">Proposer une nouvelle idée</button></a>
</div>

<script src=""></script>
        
@stop