const title = "Beginning Writing Routine";
const contentRaw =
  "If you've been having trouble deciding what to make for breakfast, you've landed at the perfect spot. We completely understand. You have fallen into a breakfast routine where you have the same or similar breakfasts day after day and you have reached the point where you'd like to try something different. It's completely frustrating knowing you want something new for breakfast but not being able to come up with breakfast ideas for something different. That's exactly why we created the Breakfast Ideas generator. We hope this random breakfast idea generator will help you find new and exciting breakfast ideas by showing you options that you may not have otherwise considered. You may also find our dinner ideas tool useful if you're having the same issue of having a difficult time deciding on that meal as well.\nOne of the best aspects of this breakfast idea generator is that it allows you to see breakfast ideas through pictures rather than a long list of recipes. When it comes to food, it's much easier to know what looks appealing through a photo than through a recipe. Then if you see something that looks appealing, you also have a link to the recipe to make it. This makes finding breakfast ideas much easier than trying to look through a long list of breakfast recipes. While you're free to use this generator any way you want to come up with new breakfast ideas, below you can find some of the more common ways people tend to use it. It happens to us all. You wake up and you're hungry but you're just not in the mood for the breakfast you've had the past week. You want something different, but as you look in your refrigerator and cupboards, there doesn't seem to be anything that's appealing. You want something new but you have no idea what that new is. By looking at pictures of different breakfast ideas, you're sure to come across a bunch of new ideas that you have never before considered. Hopefully, a few of those will sound appealing and you have been inspired to try something new for breakfast. It's also great to look through all the random breakfast ideas the night before so you can be inspired and choose your breakfast for the next morning.";
const content = contentRaw.split("\n");

export const Editor = () => {
  return (
    <>
      <h2>{title}</h2>
      <div className="content">
        {content.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </>
  );
};

export const WidthFixedEditor = () => {
  return (
    <>
      <h2 style={{ whiteSpace: "nowrap" }}>{title}</h2>
      <div className="width-fixed-editor">
        <div className="content">
          {content.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </>
  );
};
