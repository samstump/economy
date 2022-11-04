# Simulated Economy

## Resources
Resources are distributed throughout the environment.
There are different kinds of resources available, and
the types and quantities of resources available vary by 
location.
A list of resources might be: 
```
resource_names = ["food", "timber", "stone", "iron"]
```
### Distribution
At any location, the distribution of resources can be described by a vector, 
```R = (r_0, r_1, ...)``` where ```r_i``` is the maximum production 
of resource ```i```.  This distribution may change over time.
Resources may be abundant for a time, then become less so.
The most simple case is where the resources at each point ```R_p```
are constant.


## Agents
Agents are the participants in the economy.
An agent in a particular location strives to produce
resources. Agents are classified by type and are characterized
by what they produce.  Some typical agents are shown below.
The table below describes the agent types in terms of the resource outputs.

| Agent Type | Resource Produced |
|------------|-------------------|
| farm       | food              |
| sawmill    | timber            |
| quarry     | stone             |
| mine       | iron              |

### Workforce
Agents have a workforce property, numeric - a proxy for population.
The agents' production is dependent on workforce. 
At `workforce = 0`, there is no production.

#### Population Growth
Given the right conditions, workforce will increase over time.
Under bad conditions, such as too little food, workforce
will decrease over time.

### Production
Given local resources and workforce, an agent will make some production.
Refer to the `Agent Type` to `Resource Produced` mapping provided above.
Each agent type has a labor factor, which the ratio of workforce 
to production. Other resources in various quantities may be required for
production, refer to the table below.

>TODO: is there a good way to express these input/output relations?

```R_1 f + R_2 t + R_3 q + R_4 m + ... + R_k v_k = Output?```

| Agent Type | food | timber | stone | iron | output    |
|------------|------|--------|-------|------|-----------|
| farm       | 1    | 3      | 1     | 1    | 10 food   |
| sawmill    | 1    | 2      | 1     | 2    | 10 timber |
| quarry     | 1    | 2      | 1     | 2    | 10 stone  |
| mine       | 1    | 3      | 2     | 1    | 10 iron   |
| agent_k    | f_k  | t_k    | s_k   | i_k  | X output  |

#### Productivity
Agents can earn production bonuses by:
- investing in production facilities
- educating the workforce
- developing new technologies

## Commerce

### Double Auction Clearing House
### Transportation
