export function onDragStart(event)
{
    event.dataTransfer.setData("text", event.target.id);
};

export function onDrop(event)
{
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    const dropZone = event.target;

    if(!dropZone.closest(".kanbanColumn"))
    {
        dropZone = dropZone.closest(".kanbanColumn");
    };

    if (dropZone)
    {
        dropZone.appendChild(draggableElement);
    };

    event.dataTransfer.clearData();
};

export function onDragOver(event)
{
    event.preventDefault();
};