<script>
    const rows = 30;
    const columns = 50;

    // Create a grid array based on the number of rows and columns
    let grid = Array.from({ length: rows }, () => Array(columns).fill(null));

    // Selected color for the pixels
    let selectedColor = "#000000";

    // Function to handle click events
    function handleClick(row, col) {
        grid[row][col] =
            grid[row][col] === selectedColor ? "white" : selectedColor;
    }
</script>

<div class="outer-container">
    <div class="controls">
        <label for="colorPicker">Choose Color:</label>
        <input type="color" id="colorPicker" bind:value={selectedColor} />
    </div>
    <div class="grid" style="--rows: {rows}; --columns: {columns}">
        {#each grid as row, rowIndex}
            {#each row as color, colIndex}
                <div
                    class="pixel"
                    style="background-color: {color || 'white'}"
                    on:click={() => handleClick(rowIndex, colIndex)}
                ></div>
            {/each}
        {/each}
    </div>
</div>

<style>
    .outer-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh; /* Full viewport height */
    }

    .controls {
        margin-bottom: 20px;
    }

    .grid {
        display: grid;
        grid-template-rows: repeat(
            var(--rows),
            25px
        ); /* Set fixed height for rows */
        grid-template-columns: repeat(
            var(--columns),
            25px
        ); /* Set fixed width for columns */
        gap: 1px; /* 1 pixel gap between cells */
    }

    .pixel {
        width: 100%;
        height: 100%;
        background-color: white;
        box-sizing: border-box;
        border: 0.5px solid #ccc;
    }

    .pixel:hover {
        border: 1px solid #000;
    }
</style>
