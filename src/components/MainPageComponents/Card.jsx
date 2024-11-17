import { useEffect, useState } from "react";
import Users from "../../hooks/Users";

const Card = ({ name, src, votes, id }) => {
  const [isVoting, setIsVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [voteText, setVoteText] = useState("Vote");
  const [currentVotes, setCurrentVotes] = useState(votes);

  const presidentsURL =
    "https://6738a9ca4eb22e24fca8988e.mockapi.io/presidents";

  useEffect(() => {
    const fetchPresidentsVotes = async () => {
      const response = await fetch(`${presidentsURL}/${id}`);
      const data = await response.json();
      setCurrentVotes(data.votes);
    };

    fetchPresidentsVotes();
  }, [id]);

  const handleVoteClick = () => {
    setIsVoting(true);
  };

  const handleCancel = () => {
    setIsVoting(false);
    setVoteText("Vote");
  };

  const handleSure = async () => {
    setIsVoting(false);
    setHasVoted(true);
    setVoteText("Voted");

    setCurrentVotes((prevVotes) => prevVotes + 1);

    try {
      const response = await fetch(`${presidentsURL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ votes: currentVotes + 1 }),
      });

      if (response.ok) {
        console.log("Vote updated successfully.");
      } else {
        console.error("Failed to update the vote.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleChangeVote = async () => {
    setHasVoted(false);
    setVoteText("Vote");

    setCurrentVotes((prevVotes) => prevVotes - 1);

    try {
      const response = await fetch(`${presidentsURL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ votes: currentVotes - 1 }),
      });

      if (response.ok) {
        console.log("Vote change updated successfully.");
      } else {
        console.error("Failed to update the vote change.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-4 rounded pb-4 shadow-md">
      <img src={src} alt={name} className="rounded-t" />
      <h2 className="text-2xl text-myBlue">{name}</h2>
      <span className="rounded bg-myBlue px-4 text-white">{currentVotes}</span>

      {!hasVoted ? (
        !isVoting ? (
          <button
            onClick={handleVoteClick}
            className="rounded bg-myBlue px-4 py-1 text-lg uppercase text-white transition-all duration-300 hover:bg-myHoverBlue"
          >
            {voteText}
          </button>
        ) : (
          <div className="flex gap-1">
            <button
              className="rounded bg-myBlue px-4 py-1 text-lg uppercase text-white transition-all duration-300 hover:bg-myHoverBlue"
              onClick={handleSure}
            >
              I'm Sure
            </button>
            <button
              className="rounded bg-red-500 px-4 py-1 text-lg uppercase text-white transition-all duration-300 hover:bg-red-400"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        )
      ) : (
        <div className="flex gap-1">
          <button className="rounded bg-myBlue px-4 py-1 text-lg uppercase text-white transition-all duration-300">
            {voteText}
          </button>
          <button
            className="rounded bg-red-500 px-4 py-1 text-lg uppercase text-white transition-all duration-300 hover:bg-red-400"
            onClick={handleChangeVote}
          >
            Change Vote
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
