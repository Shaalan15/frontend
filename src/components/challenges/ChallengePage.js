import React from 'react';
import Card from './ChallengeItems/Card';

function ChallengePage(){
    return(
    
    <div className="expanded-div">

        <div 
        id="card-section"
        className="d-flex my-4 justify-content-between">

        <div class="container meow">
          <div class="row">
            <div class="col">
              <Card 
                imageUrl="https://images.unsplash.com/photo-1448375240586-882707db888b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                title="One week in the forest" 
                description="Build a work of art with materials you find in the forest..." 
                buttonLabel="Accept Challenge"
              />
            </div>

            <div class="col">
              <Card 
                imageUrl="https://images.unsplash.com/photo-1602871121446-d8fc5e266429?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" 
                title="Art and the pandemic" 
                description="Hardships have always inspired art..." 
                buttonLabel="Accept Challenge"
              />
            </div>

            <div class="col">
              <Card 
                imageUrl="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" 
                title="For nature!" 
                description="Create a piece of art made up entirely of recycled materials..." 
                buttonLabel="Accept Challenge"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default ChallengePage;