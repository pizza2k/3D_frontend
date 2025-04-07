import axios from 'axios';

const commandMap = {
    id1: 'python view_viser.py model.model_dir="./output/BEI/" scene.scene_path="/data2/lyl/SG/semantic-gaussians/data/bei" render.fusion_dir="./output/fusion_test/bei/0.pt"',
    id2: 'python view_viser.py model.model_dir="./output/PARK01/" scene.scene_path="/data2/lyl/SG/semantic-gaussians/data/park01" render.fusion_dir="./output/fusion_test/park01/0.pt"',
    id3: 'python view_viser.py model.model_dir="./output/ROOM/" scene.scene_path="/data2/lyl/SG/semantic-gaussians/data/room" render.fusion_dir="./output/fusion_test/0.pt"',
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
