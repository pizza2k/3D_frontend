import axios from 'axios';

const commandMap = {
    id1: 'python view_viser.py model.model_dir="./output/EXP_NAME/" scene.scene_path="/data2/lyl/SG/semantic-gaussians/data/room"',
    id2: 'command2',
    id3: 'command3'
};

export const fetchModelDetails = (id) => {
    const command = commandMap[id];
    if (!command) {
        throw new Error(`No command found for id: ${id}`);
    }

    console.log("Request payload:", {
        dir: '/data2/lyl/SG/semantic-gaussians',
        command: command
    });

    return axios.post('http://211.71.15.42:3001/api/run-command', {
        dir: '/data2/lyl/SG/semantic-gaussians',
        command: command
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
